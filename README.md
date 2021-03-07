![singlescreen](https://user-images.githubusercontent.com/25160664/110238558-8d4af100-7f42-11eb-8e40-946b20793645.png)

# myNetflix
Projekt szkoleniowy w ramach inicjatywy devLeaders. Zespół stworzy klona Netflix z użyciem React, Ract Native, NestJS

# Instrukcja uruchomienia projektu
Wymagania  
======
    - plugin vsc:  
        - ms-azuretools.vscode-docker
        - ms-vscode-remote.remote-containers
        - q.typescript-mono-repo-import-helper
        - msjsdiag.debugger-for-chrome
    - globalnie zainstalowane node, lerna, docker

Backend  
======
Uruchomienie
------
![remote-containers](https://microsoft.github.io/vscode-remote-release/images/remote-dev-status-bar.png)
[remote-containers](https://microsoft.github.io/vscode-remote-release/images/remote-containers-readme.gif)
- uruchomić remote-containers (zielony kwadrecik lewy dolny róg); Remote-Containers: Reopen Folder in Container
- lerna bootstrap
- utwórz plik .env na podstawie .enc.clone
![start debuger](https://code.visualstudio.com/assets/docs/editor/debugging/debugging_hero.png)
- uruchomić maszyne możesz wybierając Debug Nest Framework w "Run and Debug" i klikając zieloną strzałke lub uruchamiając komende (w katalogu packages/backend)
```shell
npm run start:devts
```
Migracja danych
------
(migrator wymaga pliku .env)  
- Generowanie migratora na podstawie encji
```shell
npm run typeorm:cli -- migration:generate -n nazwa_migratora
```
- Tworzenie nowego (kolejnego) pustego migratora
```shell
npm run typeorm:cli -- migration:create -n nazwa_migratora
```
- Uruchomienie migratora
```shell
npm run typeorm:cli -- migration:run
```

Frontend  
======
- lerna bootstrap
- uruchomić maszyne możesz wybierając XYZ w "Run and Debug" i klikając zieloną strzałke lub uruchamiając komende (w katalogu packages/frontend)
```shell
npm run typeorm:cli -- migration:run
```

Mobile  
======
- lerna bootstrap
- uruchamiając komende (w katalogu packages/mobile)
```shell
react-native run-android
```

![123392251_1289031908099392_6808629649232709375_n](https://user-images.githubusercontent.com/25160664/110238815-fed76f00-7f43-11eb-88dd-00ebdc05fd2a.jpg)
![123443660_775690699674841_797764833403254295_n](https://user-images.githubusercontent.com/25160664/110238824-04cd5000-7f44-11eb-8ad4-0ce45c45dbe7.jpg)
![123451299_1429158413953292_8855398351427122078_n](https://user-images.githubusercontent.com/25160664/110238827-072faa00-7f44-11eb-823a-d3446658bb90.jpg)

