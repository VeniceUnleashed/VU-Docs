---
title: SendEntry
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[SendEntry](#constructor-0)**() |
| **[SendEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SendEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[SendEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "target" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SendEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SendEntry {#constructor-0}
> **SendEntry**()

Creates a new [SendEntry](/vext/ref/fb/sendentry) frostbite instance.

### SendEntry {#constructor-1}
> **SendEntry**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SendEntry](/vext/ref/fb/sendentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SendEntry {#constructor-2}
> **SendEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [SendEntry](/vext/ref/fb/sendentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [SendEntry](/vext/ref/fb/sendentry). |

### SendEntry {#constructor-3}
> **SendEntry**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SendEntry](/vext/ref/fb/sendentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SendEntry](/vext/ref/fb/sendentry). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "target" %}}
> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SendEntry](/vext/ref/fb/sendentry) type.

