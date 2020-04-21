
function intern(data){
    let html =""

    for (let index = 0; index < data.length; index++) {
        if(data[index].getRole()==="Intern"){
            html = html +
            `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">$data[indec].name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data[index].getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data[index].id }</li>
                    <li class="list-group-item">Email: <a href="mailto:${data[index].email}">${data[index].email}</a></li>
                    <li class="list-group-item">School: ${data[index].getSchool()}</li>
                </ul>
            </div>
            </div>
             `
        }
    }    
    return html
}

module.exports = intern