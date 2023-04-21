//Your Code Here
    function submitData(name, email) {
        const url = "http://localhost/3000/users";
        const data = {
          name: name,
          email: email,
        };
      
        const configurationObject = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        };
      
        return fetch(url, configurationObject)
          .then(resp => resp.json())
          .then(submitData => {
            console.log(submitData);
            return submitData;
          })
          .catch(error => {
            console.log(error.message);
            return error.message;
          });
      }


      