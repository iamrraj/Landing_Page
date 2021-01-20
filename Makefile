# rsync -avz build/ ubuntu@vivadrive.io:/srv/digitalfleet/landing/digitalfleet/


deploy:
	INLINE_RUNTIME_CHUNK=false npm run build
	rsync -avz build/ ubuntu@vivadrive.io:/srv/digitalfleet/landing/digitalfleet/
	rsync -avz build/ ubuntu@vivadrive.io:/srv/digitalfleet/landing/
