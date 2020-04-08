kolumna wycentrowana | wyrównana do lewej | wyrównana do prawej
:-------------------:|:-------------------|-------------------:
kolumna wycentrowana | wyrównana do lewej | wyrównana do prawej
kolumna wycentrowana | wyrównana do lewej | wyrównana do prawej
kolumna wycentrowana | wyrównana do lewej | wyrównana do prawej
1| 2 | tekst
                   2 |  10                |  inny tekst
				   
				   
Zadanie 9

WebJob na podstawie danych w polu [Title], [Copy sent] i [Expiration date] uzupełni pola [Message] i [Days to expiration].

Pole Message bedzie miało treść: "[Title] expired/not expired and copy was sent/not sent"
Pole "Days to expiration" to odjęcie aktualnej daty od 'Expiration date'.


Przykładowo na liscie SharePoint są takie dane i mamy dzis date 08/04/2020 (WebJob będzie modyfikował dane na podstawie aktualnej daty):

--------------------------------------------------------------------------------------------------------------------
 Title | Message |Copy sent |Expiration date | Days to expiration
:-:|:-:|:-:|:-:|:-:|
Document 1 | "No message"|[+]|07/04/2020| -1
Document 2 | "No message" | [-] | 10/04/2020| 2
Document 3 | "No message" | [-] | 12/04/2020 | 4
Document 4 | "No message" | [+] | 16/04/2020 | 8
--------------------------------------------------------------------------------------------------------------------

Po uruchomieniu WebJoba powinno to być ustawine w ten sposob:
--------------------------------------------------------------------------------------------------------------------
 Title | Message |Copy sent |Expiration date | Days to expiration
:-:|:-:|:-:|:-:|:-:|
Document 1 | "Document 1 expired and copy was sent"|[+]|07/04/2020| -1
Document 2 | "Document 2 expired and copy was not sent" | [-] | 05/04/2020| -3
Document 3 | "Document 3 not expired and copy was not sent" | [-] | 12/04/2020 | 4
Document 4 | "Document 4 expired and copy was sent" | [+] | 06/04/2020 | -2
--------------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------------
Title; 			Message; 									Copy sent; 		Expiration date; 	Days to expiration;
---------------------------------------------------------------------------------------------------------------------
Document 1; 	"Document 1 expired and copy was sent";			[+];			07/04/2020				-1
Document 2; 	"Document 2 expired and copy was not sent";	    [-];			05/04/2020				-3
Document 3; 	"Document 3 not expired and copy was not sent";	[-];			12/04/2020				 4
Document 4; 	"Document 4 expired and copy was sent";			[+];			06/04/2020				-2
--------------------------------------------------------------------------------------------------------------------

Ostatnim etapem zadania jest wdrożenie WebJob'a do Azure i konfiguracja w taki sposob, zeby uruchamiał sie co 10 minut.

Przykład WebJoba znajduje się w lokalizacji:
				   