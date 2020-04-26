---
title: MultiCrossfaderGroup
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[MultiCrossfaderGroup](#constructor-0)**() |
| **[MultiCrossfaderGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MultiCrossfaderGroup](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[MultiCrossfaderGroup](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "amplitude" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "start" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "stop" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "fadeAmplitude" >}} | float |
| {{< prop "fadeBegin" >}} | float |
| {{< prop "fadeEnd" >}} | float |
| {{< prop "fadeType" >}} | [FaderType](/vext/ref/fb/fadertype) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MultiCrossfaderGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MultiCrossfaderGroup {#constructor-0}
> **MultiCrossfaderGroup**()

Creates a new [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup) frostbite instance.

### MultiCrossfaderGroup {#constructor-1}
> **MultiCrossfaderGroup**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MultiCrossfaderGroup {#constructor-2}
> **MultiCrossfaderGroup**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup). |

### MultiCrossfaderGroup {#constructor-3}
> **MultiCrossfaderGroup**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup). |

## Properties
### {{% prop-heading "amplitude" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "start" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "stop" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "fadeAmplitude" %}}
> **float**

### {{% prop-heading "fadeBegin" %}}
> **float**

### {{% prop-heading "fadeEnd" %}}
> **float**

### {{% prop-heading "fadeType" %}}
> **[FaderType](/vext/ref/fb/fadertype)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MultiCrossfaderGroup](/vext/ref/fb/multicrossfadergroup) type.

