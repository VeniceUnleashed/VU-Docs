---
title: UINodeConnection
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[UINodeConnection](#constructor-0)**() |
| **[UINodeConnection](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UINodeConnection](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sourceNode" >}} | [UINodeData](/vext/ref/fb/uinodedata) \| nil |
| {{< prop "targetNode" >}} | [UINodeData](/vext/ref/fb/uinodedata) \| nil |
| {{< prop "sourcePort" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "targetPort" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "numScreensToPop" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UINodeConnection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UINodeConnection {#constructor-0}
> **UINodeConnection**()

Creates a new [UINodeConnection](/vext/ref/fb/uinodeconnection) frostbite instance.

### UINodeConnection {#constructor-1}
> **UINodeConnection**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UINodeConnection](/vext/ref/fb/uinodeconnection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UINodeConnection {#constructor-2}
> **UINodeConnection**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINodeConnection](/vext/ref/fb/uinodeconnection). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UINodeConnection](/vext/ref/fb/uinodeconnection). |

## Properties
### {{% prop-heading "sourceNode" %}}
> **[UINodeData](/vext/ref/fb/uinodedata)** | **nil**

### {{% prop-heading "targetNode" %}}
> **[UINodeData](/vext/ref/fb/uinodedata)** | **nil**

### {{% prop-heading "sourcePort" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "targetPort" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "numScreensToPop" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UINodeConnection](/vext/ref/fb/uinodeconnection) type.

