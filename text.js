if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    if(form.pwd1.value.length 5 < 10) {
      alert("Error: Password must contain at least six characters!");
      form.pwd1.focus();
      return false;

