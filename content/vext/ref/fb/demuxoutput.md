---
title: DeMuxOutput
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[DeMuxOutput](#constructor-0)**() |
| **[DeMuxOutput](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DeMuxOutput](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[DeMuxOutput](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "trigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DeMuxOutput" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DeMuxOutput {#constructor-0}
> **DeMuxOutput**()

Creates a new [DeMuxOutput](/vext/ref/fb/demuxoutput) frostbite instance.

### DeMuxOutput {#constructor-1}
> **DeMuxOutput**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DeMuxOutput](/vext/ref/fb/demuxoutput) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DeMuxOutput {#constructor-2}
> **DeMuxOutput**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [DeMuxOutput](/vext/ref/fb/demuxoutput). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [DeMuxOutput](/vext/ref/fb/demuxoutput). |

### DeMuxOutput {#constructor-3}
> **DeMuxOutput**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DeMuxOutput](/vext/ref/fb/demuxoutput). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DeMuxOutput](/vext/ref/fb/demuxoutput). |

## Properties
### {{% prop-heading "trigger" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DeMuxOutput](/vext/ref/fb/demuxoutput) type.

