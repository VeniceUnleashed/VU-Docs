---
title: EdgeModelLightMapData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[EdgeModelLightMapData](#constructor-0)**() |
| **[EdgeModelLightMapData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EdgeModelLightMapData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lightMapUvs" >}} | [Vec4](/vext/ref/shared/class/vec4)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EdgeModelLightMapData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EdgeModelLightMapData {#constructor-0}
> **EdgeModelLightMapData**()

Creates a new [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata) frostbite instance.

### EdgeModelLightMapData {#constructor-1}
> **EdgeModelLightMapData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EdgeModelLightMapData {#constructor-2}
> **EdgeModelLightMapData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata). |

## Properties
### {{% prop-heading "lightMapUvs" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EdgeModelLightMapData](/vext/ref/fb/edgemodellightmapdata) type.

