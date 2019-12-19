$('.incubate-controls a').on('click', function(e) {
    e.preventDefault();
    document.execCommand($(this).data('role'), false);
  });
  
  
  //# region for popover open and close
  
  $(function(){
      $("#popoverExampleTwo").popover({
          html: true,
          content: function() {
            return $('#popoverExampleTwoHiddenContent').html();
          },
          trigger:'click',
          title: '',
          placement:'bottom'
      });
      
  });    
  $('html').on('click', function(e) {
    if (typeof $(e.target).data('original-title') == 'undefined' &&
       !$(e.target).parents().is('.popover.in')) {
      $('[data-original-title]').popover('hide');
        $('.popover').css('display','none');
    }
  });
  
  $(document).on("click", "#button_cells", function() {
      generateTable();
  });
  
  function generateTable(){
      var myRows = document.getElementById("rows");
  var myColumns = document.getElementById("columns");
  var tableSummary = document.getElementById("table_summary");
  var tableCaption = document.getElementById("table_caption");
  var tableClass = document.getElementById("table_class");
  var tableID = document.getElementById("table_id");
  var cellsSubmit = document.getElementById("button_cells");
  var numberPattern = /^(\(\d+\) ?)?(\d+[\- ])*\d+$/;
  var cellsHolder = document.getElementById("cells_holder");
  var buttonGenerateHolder = document.getElementById("button_generate_holder");
  var myColumnsHTML = "";
  var myRowsHTML = "";
  var myTHCheckbox = document.forms["table_generator_form"]["TH"];
  var codeResultHolder = document.getElementById("code_result");
  var codeResult = document.getElementById("code_result_text");
  var myFinalHTML = "";
  var myTextAreaID = 1;
  var THDone = 0;
  var THFinal = "";
  var tableClassValue = "";
  var tableIDValue = "";
  var myRadioValue = "";
  var myRadioNone = document.getElementById("th_none");
  var myRadioRow = document.getElementById("th_row");
  var myRadioColumn = document.getElementById("th_column");
  var myTableExtrasHolder = document.getElementById("table_extras_holder");
  var myTableExtrasCheckbox = document.forms["table_generator_form"]["table_extras"];
  var numericPattern = /\d/;
  var myTab = "";
  
          myColumnsHTML = "";
      myTextAreaID = 1;
      
      if (myRows.value == "" || /^\s+$/.test(myRows.value))
          {
          alert("Please enter number of Rows");
          return false;
          }
  
      if (numberPattern.test(myRows.value) == false || myRows.value > 50)
          {
          alert('Only numeric data below 50 allowed for Rows');
          return false;
          }
  
      if (myColumns.value == "" || /^\s+$/.test(myColumns.value))
          {
          alert("Please enter number of Columns");
          return false;
          }
  
      if (numberPattern.test(myColumns.value) == false || myColumns.value > 11)
          {
          alert('Only numeric data below 12 allowed for Columns');
          return false;
          }
  
      if (tableSummary.value == "" || /^\s+$/.test(tableSummary.value))
          {
          alert("Please enter a Summary for your table");
          return false;
          }
  
          for (r=0;r<myRows.value;r++)
          {
              for (c=0;c<myColumns.value;c++) 
              {
                  myColumnsHTML += "<textarea rows='5' cols='15' id='text_box"+myTextAreaID+"'></textarea>";
                  if(c+1 == myColumns.value) {
                      myColumnsHTML = myColumnsHTML + "<br />";
                  }
                  myTextAreaID = myTextAreaID + 1;
              }
          }
  
      cellsHolder.innerHTML = myColumnsHTML;
  }   
      
  $(document).on("click", "#button_generate", function() {
      generateTableCode();
  });
  
  function generateTableCode(){
      var myRows = document.getElementById("rows");
  var myColumns = document.getElementById("columns");
  var tableSummary = document.getElementById("table_summary");
  var tableCaption = document.getElementById("table_caption");
  var tableClass = document.getElementById("table_class");
  var tableID = document.getElementById("table_id");
  var cellsSubmit = document.getElementById("button_cells");
  var numberPattern = /^(\(\d+\) ?)?(\d+[\- ])*\d+$/;
  var cellsHolder = document.getElementById("cells_holder");
  var buttonGenerateHolder = document.getElementById("button_generate_holder");
  var myColumnsHTML = "";
  var myRowsHTML = "";
  var myTHCheckbox = document.forms["table_generator_form"]["TH"];
  var codeResultHolder = document.getElementById("code_result");
  var codeResult = document.getElementById("code_result_text");
  var myFinalHTML = "";
  var myTextAreaID = 1;
  var THDone = 0;
  var THFinal = "";
  var tableClassValue = "";
  var tableIDValue = "";
  var myRadioValue = "";
  var myRadioNone = document.getElementById("th_none");
  var myRadioRow = document.getElementById("th_row");
  var myRadioColumn = document.getElementById("th_column");
  var myTableExtrasHolder = document.getElementById("table_extras_holder");
  var myTableExtrasCheckbox = document.forms["table_generator_form"]["table_extras"];
  var numericPattern = /\d/;
  var myTab = "";
  
          myColumnsHTML = "";
      myTextAreaID = 1;
  
      
      if (tableSummary.value == "" || /^\s+$/.test(tableSummary.value))
          {
          alert("Table Summary is required");
          return false;
          }
  
      if (tableID.value.indexOf(" ") !== -1)
          {
          alert("You cannot use a space in the Table ID");
          return false;
          }
  
      if (numericPattern.test(tableID.value.charAt("0")) == true)
          {
          alert("The Table ID cannot begin with a numeric character");
          return false;
          }
  
      for (var z=0; z < myTHCheckbox.length; z++) {
      if (myTHCheckbox[z].checked)
          {
              myRadioValue = myTHCheckbox[z].value;
          }
      }
  
      codeResult.value = "";
      THDone = 0;
      THFinal = "";
      tableClassValue = "";
      tableIDValue = "";
  
      if (tableClass.value !== "") {
          tableClassValue = " class=\""+tableClass.value+"\"";
      }
  
      if (tableID.value !== "") {
          tableIDValue = " id=\""+tableID.value+"\"";
      }
      
      myFinalHTML = "<table cellspacing=\"0\" summary=\""+tableSummary.value+"\""+tableClassValue+tableIDValue+">\n";
      
      if (tableCaption.value !== "") {
      myFinalHTML += "	<caption>"+tableCaption.value+"</caption>\n";
      }
      var myIncrement = 1;
          for (r2=0;r2<myRows.value;r2++)
          {
              if (r2==0 && myTableExtrasCheckbox.checked) {
              myFinalHTML = myFinalHTML + "	<thead>\n		<tr>\n";
              }
              else
              {
              
                  if (r2==myRows.value - 1 && myTableExtrasCheckbox.checked) {
                  myFinalHTML = myFinalHTML + "	</tbody>\n	<tfoot>\n		<tr>\n";
                  }
                  else
                  {
                  myFinalHTML = myFinalHTML + "	" + myTab + "<tr>\n";
                  }
  
              }
              
              for (c2=0;c2<myColumns.value;c2++) 
              {
                  if (myRadioValue=="th_row_selected" && c2 < myColumns.value && THDone < myColumns.value + 1 && THFinal == "") {
                      myFinalHTML += "		" + myTab + "<th>"+document.getElementById("text_box"+myIncrement).value+"</th>\n";
                      THDone = THDone + 1;
                      myIncrement = myIncrement + 1;
                      if (THDone == myColumns.value) {
                          THFinal = "end";
                      }
                  }
                  else
                  {
                  if (c2==0 && myRadioValue=="th_column_selected") {
                      myFinalHTML += "		" + myTab + "<th>"+document.getElementById("text_box"+myIncrement).value+"</th>\n";
                      myIncrement = myIncrement + 1;
                      }
                      else
                      {
                  myFinalHTML += "		" + myTab + "<td>"+document.getElementById("text_box"+myIncrement).value+"&nbsp;</td>\n";
                  myIncrement = myIncrement + 1;
                  }
                  }
          }
  
              if (r2==0 && myTableExtrasCheckbox.checked) {
              myFinalHTML = myFinalHTML + "		</tr>\n	</thead>\n	<tbody>\n";
              }
              else
              {
              if (r2==myRows.value - 1 && myTableExtrasCheckbox.checked) {
              myFinalHTML = myFinalHTML + "		</tr>\n	</tfoot>\n";
              }
              else
              {
              myFinalHTML = myFinalHTML + "	" + myTab + "</tr>\n";
              }
              }
              
          }
  
          myFinalHTML = myFinalHTML + "</table>";
  
          //makeOpacityZero(codeResult.id);
          codeResult.value = myFinalHTML;
      
     $(".incubate-content").append(myFinalHTML.toString());
          //opacity(codeResult.id, 0, 100, 400);
          myTab = "";
  }
       