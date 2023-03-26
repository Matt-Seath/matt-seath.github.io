+++
archetype = "default"
title = "CloudLogic"
weight = 10
+++

{{< mermaid >}}
graph TB;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{<strong>Decision</strong>}
    C -->|One| D[Result one]
    C -->|Two| E((j kkljlkjlkjlk))
    
    click E "{{< relref "Authentication Issues/_index.md" >}}"
    click B "{{< relref "/content/CloudLogic/Authentication Issues/_index.md" >}}"
{{< /mermaid >}}
