const Navbar = {
  template: `
    <!-- NaveBar -->

    <div class="navbar bg-base-100 shadow-sm grid grid-cols-3">
    <!-- Home Button -->
  <div class="flex justify-start">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <!-- Home Button -->

  <!-- Menu -->
  <div class=" flex navbar-center hidden lg:flex justify-center">
      <ul class="menu menu-horizontal  ">
        <li class="dropdown dropdown-hover dropdown-bottom ">
          
            <p class=" font-bold">ບັນຊີປະຈຳວັນ</p>
            <ul class=" bg-base-100 w-40  z-[50] border dropdown-content m-[-2px] rounded-box shadow-lg" >
           
            <li ><button class="justify-center" @click="$emit('change-Page','expense-component')">ລາຍຮັບ-ລາຍຈ່າຍ</button></li>
            <li ><button class="justify-center" @click="$emit('change-Page','home-component')">ເງິນລ່ວງໜ້າ</button></li>
            
              
            </ul>
          
        </li>
        
      </ul>
    </div>
     <!-- Menu -->

  <!-- Login -->
  <div class="flex gap-2 justify-end">
    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  <!-- Login -->


</div>
    <!-- NaveBar -->
  `
}