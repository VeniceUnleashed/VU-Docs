---
title: LocalLightEntityData
---

Inherits from 
[SpatialEntityData](/vext/ref/fb/spatialentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[LocalLightEntityData](#constructor-0)**() |
| **[LocalLightEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LocalLightEntityData](#constructor-2)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[LocalLightEntityData](#constructor-3)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[LocalLightEntityData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[LocalLightEntityData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[LocalLightEntityData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "color" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "particleColorScale" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "enlightenColorScale" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "radius" >}} | float |
| {{< prop "intensity" >}} | float |
| {{< prop "attenuationOffset" >}} | float |
| {{< prop "enlightenColorMode" >}} | [EnlightenColorMode](/vext/ref/fb/enlightencolormode) |
| {{< prop "enlightenEnable" >}} | bool |
| {{< prop "visible" >}} | bool |
| {{< prop "specularEnable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LocalLightEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LocalLightEntityData {#constructor-0}
> **LocalLightEntityData**()

Creates a new [LocalLightEntityData](/vext/ref/fb/locallightentitydata) frostbite instance.

### LocalLightEntityData {#constructor-1}
> **LocalLightEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LocalLightEntityData](/vext/ref/fb/locallightentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LocalLightEntityData {#constructor-2}
> **LocalLightEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). |

### LocalLightEntityData {#constructor-3}
> **LocalLightEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). |

### LocalLightEntityData {#constructor-4}
> **LocalLightEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). |

### LocalLightEntityData {#constructor-5}
> **LocalLightEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). |

### LocalLightEntityData {#constructor-6}
> **LocalLightEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LocalLightEntityData](/vext/ref/fb/locallightentitydata). |

## Properties
### {{% prop-heading "color" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "particleColorScale" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "enlightenColorScale" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "radius" %}}
> **float**

### {{% prop-heading "intensity" %}}
> **float**

### {{% prop-heading "attenuationOffset" %}}
> **float**

### {{% prop-heading "enlightenColorMode" %}}
> **[EnlightenColorMode](/vext/ref/fb/enlightencolormode)**

### {{% prop-heading "enlightenEnable" %}}
> **bool**

### {{% prop-heading "visible" %}}
> **bool**

### {{% prop-heading "specularEnable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LocalLightEntityData](/vext/ref/fb/locallightentitydata) type.

