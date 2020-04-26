---
title: DeltaGroup
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[DeltaGroup](#constructor-0)**() |
| **[DeltaGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DeltaGroup](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[DeltaGroup](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "delta" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DeltaGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DeltaGroup {#constructor-0}
> **DeltaGroup**()

Creates a new [DeltaGroup](/vext/ref/fb/deltagroup) frostbite instance.

### DeltaGroup {#constructor-1}
> **DeltaGroup**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DeltaGroup](/vext/ref/fb/deltagroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DeltaGroup {#constructor-2}
> **DeltaGroup**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [DeltaGroup](/vext/ref/fb/deltagroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [DeltaGroup](/vext/ref/fb/deltagroup). |

### DeltaGroup {#constructor-3}
> **DeltaGroup**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DeltaGroup](/vext/ref/fb/deltagroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DeltaGroup](/vext/ref/fb/deltagroup). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "delta" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DeltaGroup](/vext/ref/fb/deltagroup) type.

