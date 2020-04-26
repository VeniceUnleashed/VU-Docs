---
title: ReceiveEntry
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[ReceiveEntry](#constructor-0)**() |
| **[ReceiveEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ReceiveEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[ReceiveEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "source" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter) \| nil |
| {{< prop "parameter" >}} | float |
| {{< prop "savedValue" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ReceiveEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ReceiveEntry {#constructor-0}
> **ReceiveEntry**()

Creates a new [ReceiveEntry](/vext/ref/fb/receiveentry) frostbite instance.

### ReceiveEntry {#constructor-1}
> **ReceiveEntry**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ReceiveEntry](/vext/ref/fb/receiveentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ReceiveEntry {#constructor-2}
> **ReceiveEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [ReceiveEntry](/vext/ref/fb/receiveentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [ReceiveEntry](/vext/ref/fb/receiveentry). |

### ReceiveEntry {#constructor-3}
> **ReceiveEntry**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ReceiveEntry](/vext/ref/fb/receiveentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ReceiveEntry](/vext/ref/fb/receiveentry). |

## Properties
### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "source" %}}
> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)** | **nil**

### {{% prop-heading "parameter" %}}
> **float**

### {{% prop-heading "savedValue" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ReceiveEntry](/vext/ref/fb/receiveentry) type.

