---
title: ClientEffectMaskVolumeEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[ClientEffectMaskVolumeEntityData](#constructor-0)**() |
| **[ClientEffectMaskVolumeEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ClientEffectMaskVolumeEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[ClientEffectMaskVolumeEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[ClientEffectMaskVolumeEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ClientEffectMaskVolumeEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ClientEffectMaskVolumeEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ClientEffectMaskVolumeEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "applyEffectCurve" >}} | [Vec4](/vext/ref/shared/class/vec4) |
| {{< prop "lifeTimeInSeconds" >}} | float |
| {{< prop "updatePeriodInSeconds" >}} | float |
| {{< prop "radius" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ClientEffectMaskVolumeEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ClientEffectMaskVolumeEntityData {#constructor-0}
> **ClientEffectMaskVolumeEntityData**()

Creates a new [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata) frostbite instance.

### ClientEffectMaskVolumeEntityData {#constructor-1}
> **ClientEffectMaskVolumeEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ClientEffectMaskVolumeEntityData {#constructor-2}
> **ClientEffectMaskVolumeEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). |

### ClientEffectMaskVolumeEntityData {#constructor-3}
> **ClientEffectMaskVolumeEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). |

### ClientEffectMaskVolumeEntityData {#constructor-4}
> **ClientEffectMaskVolumeEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). |

### ClientEffectMaskVolumeEntityData {#constructor-5}
> **ClientEffectMaskVolumeEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). |

### ClientEffectMaskVolumeEntityData {#constructor-6}
> **ClientEffectMaskVolumeEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). |

### ClientEffectMaskVolumeEntityData {#constructor-7}
> **ClientEffectMaskVolumeEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata). |

## Properties
### {{% prop-heading "applyEffectCurve" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

### {{% prop-heading "lifeTimeInSeconds" %}}
> **float**

### {{% prop-heading "updatePeriodInSeconds" %}}
> **float**

### {{% prop-heading "radius" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ClientEffectMaskVolumeEntityData](/vext/ref/fb/clienteffectmaskvolumeentitydata) type.

