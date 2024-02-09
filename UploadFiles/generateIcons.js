$("body").prepend(`
<pre>
{% for category in store.categories %}
icon_{{ category.id }}: { 
    sidebarId: "l{{ category.id }}", 
    topbarId: "s{{ category.id }}", 
    image: "https://i.imgur.com/gXPCyVX.png"
}
{%- if not loop.last -%}
,
{% endif %}    
{% endfor %}
</pre>
`)