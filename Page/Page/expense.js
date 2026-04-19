const expense = {
  template: `

  <div class="container mx-auto mt-4 border-base-300 border-2 rounded-lg p-4 shadow-lg" >
  <div class="text-center mb-4"><p class="text-[2rem] font-bold">ບັນຊີປະຈຳວັນ ລາຍຮັບ-ລາຍຈ່າຍ </p></div>

  
  <div class=" justify-end flex gap-2 mb-4">

  <div>
  <!-- Modal -->
<button class="btn" onclick="my_modal_4.showModal()">ສ້າງໃໝ່</button>
<dialog id="my_modal_4" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <form>
    <p>Voucher No.</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </form>
    
    <div class="modal-action">
    <button class="btn me-2 " >ບັນທຶກ</button>
      <form method="dialog">
        <button class="btn">ຍົກເລີກ</button>
      </form>
    </div>
  </div>
</dialog>
<!-- Modal -->

</div>




  <button class="btn btn-outline btn-warning">ເລືອກ</button>
  <div><button class="btn btn-primary">xxxxxxxxx</button></div>
  </div>
  



    <div class="overflow-x-auto ">
  <table class="table">
    <!-- head -->
    <thead>
      <tr class="bg-blue-100 ">
        <th class="text-center text-lg font-bold">Voucher No.</th>
        <th class="text-center text-lg font-bold">Submit Date</th>
        <th class="text-center text-lg font-bold">Submit By</th>
        <th class="text-center text-lg font-bold">Description</th>
        <th class="text-center text-lg font-bold">Acc No</th>
        <th class="text-center text-lg font-bold">Currency</th>
        <th class="text-center text-lg font-bold">Amount</th>
         <th class="text-center text-lg font-bold">Dr</th>
          <th class="text-center text-lg font-bold">Cr</th>
        <th class="text-center text-lg font-bold">Remark</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-base-300">
        <th class="text-center">2</th>
        <td class="text-center">Hart Hagerty</td>
        <td class="text-center">Desktop Support Technician</td>
        <td class="text-center">Purple</td>
        <td class="text-center">Purple</td>
        <td class="text-center">Purple</td>
        <td class="text-center">Purple</td>
        <td class="text-center">Purple</td>
        <td class="text-center">Purple</td>
        <td class="text-start">
        <!-- Modal -->
        <div>
<button class="cursor-pointer text-blue-500 hover:text-blue-700" onclick="my_modal_edit.showModal()">ແກ້ໄຂ</button>

<dialog id="my_modal_edit" class="modal">
  <div class="modal-box w-11/12 max-w-xl">
    <form>
    <div class="grid grid-cols-2 gap-4">

    <div>
    <p>Voucher No.</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </div>

    <div>
    <p>Submit Date</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </div>

     <div>
    <p>Submit By</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </div>

    <div>
    <p>Description</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </div>

    <div>
    <p>Account No.</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </div>

    <div>
    <p>Currency</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </div>

    <div>
    <p>Amount</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </div>

    <div></div>

    <div>
    <p>Dr</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </div>

    <div>
    <p>Cr</p>
    <input type="text" placeholder="Type here" class=" p-1 mb-4 rounded" />
    </div>

    </div>
    </form>
    
    <div class="modal-action">
    <button class="btn me-2 " >ບັນທຶກ</button>
      <form method="dialog">
        <button class="btn">ຍົກເລີກ</button>
      </form>
    </div>
  </div>
</dialog>
<div>ລົບ</div>
<!-- Modal -->
</div>
</td>


</div>




        
      </tr>
    </tbody>
  </table>
</div>
</div>




 





 <script>
    export default {
      data() {
        return {
          currentpage : true,
          

    },
    methods: {
      changepahe(){
      if(this.currentpage == true){
        
      


      
      }



    </script>
    `

   
}