import { useState } from "react";
import { Edit, UserPlus, Search, ChevronLeft, ChevronRight } from "lucide-react";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType: "Admin" | "Volunteer";
  status: "Active" | "Inactive";
}

export default function ManageUsers() {
  const [showAddUser, setShowAddUser] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@dorfoundation.org",
      phone: "9876543210",
      userType: "Admin",
      status: "Active"
    },
    {
      id: "2",
      name: "Priya Sharma",
      email: "priya.sharma@dorfoundation.org",
      phone: "9876543211",
      userType: "Volunteer",
      status: "Active"
    },
    {
      id: "3",
      name: "Amit Patel",
      email: "amit.patel@dorfoundation.org",
      phone: "9876543212",
      userType: "Volunteer",
      status: "Inactive"
    },
    {
      id: "4",
      name: "Neha Gupta",
      email: "neha.gupta@dorfoundation.org",
      phone: "9876543213",
      userType: "Admin",
      status: "Active"
    },
    {
      id: "5",
      name: "Vikram Singh",
      email: "vikram.singh@dorfoundation.org",
      phone: "9876543214",
      userType: "Volunteer",
      status: "Active"
    }
  ]);

  const handleAddUser = (userData: Omit<User, "id">) => {
    const newUser: User = {
      ...userData,
      id: (users.length + 1).toString()
    };
    setUsers([...users, newUser]);
    setShowAddUser(false);
  };

  const handleEditUser = (userData: User) => {
    setUsers(users.map(user => user.id === userData.id ? userData : user));
    setEditingUser(null);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery)
  );

  const currentUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (showAddUser) {
    return <AddUser onBack={() => setShowAddUser(false)} onSave={handleAddUser} />;
  }

  if (editingUser) {
    return <EditUser user={editingUser} onBack={() => setEditingUser(null)} onSave={handleEditUser} />;
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Manage Admin
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              Add, edit, and manage system users
            </p>
          </div>
          <button
            onClick={() => setShowAddUser(true)}
            className="bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <UserPlus className="w-4 h-4" />
            Add Admin
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#969696]" />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[44px] pl-12 pr-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f6f8fc] border-b border-[#e2e8f2]">
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Phone Number
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id} className="border-b border-[#e2e8f2] last:border-b-0 hover:bg-[#f6f8fc] transition-colors">
                    <td className="px-6 py-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] ${
                        user.status === "Active" 
                          ? "bg-[#e6f7f1] text-[#25c196]" 
                          : "bg-[#ffe6e6] text-[#fb2c36]"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setEditingUser(user)}
                        className="text-[#1a4d8f] hover:bg-[#ecf4ff] p-2 rounded-[8px] transition-colors flex items-center gap-2 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="py-12 text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                No users found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-[14px]">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696]">
            Showing {filteredUsers.length} of {users.length} users
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-[#f6f8fc] border border-[#e2e8f2] px-3 py-2 rounded-[8px] text-[#4d4b48] hover:bg-[#ecf4ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48]">
              Page {currentPage} of {Math.max(1, Math.ceil(filteredUsers.length / itemsPerPage))}
            </p>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage * itemsPerPage >= filteredUsers.length}
              className="bg-[#f6f8fc] border border-[#e2e8f2] px-3 py-2 rounded-[8px] text-[#4d4b48] hover:bg-[#ecf4ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}