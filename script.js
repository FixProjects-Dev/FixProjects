// JavaScript Document
		// Small helpers: open/close modal and populate game field
		document.getElementById('year').textContent = new Date().getFullYear();
		function openForm(e){
			var btn = e.currentTarget || e.target;
			var game = btn.getAttribute('data-game') || '';
			document.getElementById('form-game').value = game;
			var bd = document.getElementById('contact-backdrop');
			bd.style.display = 'flex'; bd.setAttribute('aria-hidden','false');
			// focus message textarea
			setTimeout(function(){document.getElementById('message').focus();},80);
		}
		function closeForm(){
			var bd = document.getElementById('contact-backdrop');
			bd.style.display = 'none'; bd.setAttribute('aria-hidden','true');
			document.getElementById('contact-form').reset();
		}
		// close modal on backdrop click
		document.getElementById('contact-backdrop').addEventListener('click', function(ev){
			if(ev.target === this) closeForm();
		});

		// Platform selector logic
		function openPlatform(e){
			e.preventDefault();
			var el = e.currentTarget || e.target;
			if(el.tagName.toLowerCase() === 'span') el = el.parentElement;
			var win = el.getAttribute('data-win') || '';
			var game = el.textContent || '';
			document.getElementById('platform-game').textContent = game;
			var bd = document.getElementById('platform-backdrop');
			bd.style.display = 'flex'; bd.setAttribute('aria-hidden','false');
			var btnWin = document.getElementById('platform-win');
			btnWin.onclick = function(){ if(win) window.open(win,'_blank','noopener'); };
		}

		function closePlatform(){
			var bd = document.getElementById('platform-backdrop');
			bd.style.display = 'none'; bd.setAttribute('aria-hidden','true');
		}

		document.getElementById('platform-backdrop').addEventListener('click', function(ev){
			if(ev.target === this) closePlatform();
		});

		// About modal logic
		function openAbout(){
			var bd = document.getElementById('about-backdrop');
			bd.style.display = 'flex'; bd.setAttribute('aria-hidden','false');
		}

		function closeAbout(){
			var bd = document.getElementById('about-backdrop');
			bd.style.display = 'none'; bd.setAttribute('aria-hidden','true');
		}

		document.getElementById('about-backdrop').addEventListener('click', function(ev){
			if(ev.target === this) closeAbout();
		});