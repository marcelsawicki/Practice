$XMLfile = 'D:\Repozytorium\Practice\PowerShell\XML\CharakterystykaUpraw.XML'
[XML]$prod = Get-Content $XMLfile
$b = $prod.CharakterystykaUpraw.ChildNodes | Format-Table -Property Nazwa, Producenc
     
foreach($p in $prod.CharakterystykaUpraw.ChildNodes)
{
Write-Host $p.Nazwa
$p.Producenci.ChildNodes | Format-Table

}

#
#$enumer = $prod.RoslinaUprawna.Producenci.ChildNodes.GetEnumerator()
#while($enumer.moveNext())
#{
#    $curr = $enumer.Current
#    Write-Host $curr.Kraj
#    Write-Host $curr.Udzial
#}