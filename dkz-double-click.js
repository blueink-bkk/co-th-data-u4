$(document).ready(()=>{
  const _body = document.getElementsByTagName('body');
  _body[0].addEventListener('dblclick', (e)=>{
    //const target = e.target;
    //console.log('>> double-click ', e.target)
    let target = e.target;
    if (!target.classList.contains('js-e3article')) {
      target = target.closest('.js-e3article');
    }
    //console.log('>> double-click ', target)
    if (target) {
      const ai = $(target).attr('id')
      const sku = $(target).data('sku')
      //console.log({sku})
      //console.log('>> double-click id:', $(target).attr('id'))
      const url = (ai.startsWith('/'))?
        `editora.us/edit-article?fn=${location.hostname}/${ai.substring(1)}.md`
        : `http://ultimheat.co.th/editora/edit-article/${ai}?url=${document.location.host}${document.location.pathname}`;
      console.log({url});

      console.log(document.location)

      window.open(url, '_blank')
    }
  })

  /*
  $('#submit').on('click', function(e) {
    console.log('intercepted submit.')
    $('input[name=success]').attr('type', 'text');
    return false;
  })*/


})
