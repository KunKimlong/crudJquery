$(document).ready(function(){
    // alert(123);
    var index = '';
    var txt = '';
    $('#btn-add').click(function(){
        var id = $('#id').val();
        var Name = $('#name').val();
        var gender = $('#gender').val();
        var salary = $('#salary').val();
        // alert(id+Name+gender+salary);
        txt=`
            <tr>
                <td>${id}</td>
                <td>${Name}</td>
                <td>${gender}</td>
                <td>${salary}</td>  
                <td>
                    <button id="btn-start-update" class="btn btn-warning">Update <i class="bi bi-pencil-square"></i></button>
                    <button id="btn-delete" class="btn btn-danger">Delete <i class="bi bi-trash3"></i></button>
                </td>
            </tr>
        `;
        console.log(txt);
        $('tbody').append(txt);
        $('#id').val('');
        $('#name').val('');
        $('#gender').val('');
        $('#salary').val('');
    });
    $('body').on('click','#btn-start-update',function(){
        $('#btn-update').removeClass('d-none');
        index = $(this).parents('tr').index();
        var row = $("table").find('tbody').find('tr');
        var id = $(this).parents('tr').find('td').eq(0).text();
        var Name = $(this).parents('tr').find('td').eq(1).text();
        var gender = $(this).parents('tr').find('td').eq(2).text();
        var salary = $(this).parents('tr').find('td').eq(3).text();
        
        $('#id').val(id);
        $('#name').val(Name);
        $('#gender').val(gender);
        $('#salary').val(salary);
        $('#btn-update').click(function(){
            // alert(index)
            var new_id = $('#id').val();
            var new_Name = $('#name').val();
            var new_gender = $('#gender').val();
            var new_salary = $('#salary').val();

            txt=`
                <td>${new_id}</td>
                <td>${new_Name}</td>
                <td>${new_gender}</td>
                <td>${new_salary}</td>  
                <td>
                    <button id="btn-start-update" class="btn btn-warning">Update <i class="bi bi-pencil-square"></i></button>
                    <button id="btn-delete" class="btn btn-danger">Delete <i class="bi bi-trash3"></i></button>
                </td>
            `;
            row.eq(index).html(txt);
        });
    });
    $('body').on('click','#btn-delete',function(){
        // alert(123)
        index = $(this).parents('tr').index();
        var row = $("table").find('tbody').find('tr');
        row.eq(index).remove();
    });
    
});