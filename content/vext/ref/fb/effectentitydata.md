---
title: EffectEntityData
---

Inherits from 
[SpatialEntityData](/vext/ref/fb/spatialentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[EffectEntityData](#constructor-0)**() |
| **[EffectEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EffectEntityData](#constructor-2)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[EffectEntityData](#constructor-3)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[EffectEntityData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EffectEntityData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EffectEntityData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "components" >}} | [GameObjectData](/vext/ref/fb/gameobjectdata)[] |
| {{< prop "maxInstanceCount" >}} | int |
| {{< prop "cullDistance" >}} | float |
| {{< prop "startDelay" >}} | float |
| {{< prop "highEndPc" >}} | bool |
| {{< prop "mediumPc" >}} | bool |
| {{< prop "lowEndPc" >}} | bool |
| {{< prop "resetInstanceWhenStarted" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EffectEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EffectEntityData {#constructor-0}
> **EffectEntityData**()

Creates a new [EffectEntityData](/vext/ref/fb/effectentitydata) frostbite instance.

### EffectEntityData {#constructor-1}
> **EffectEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EffectEntityData](/vext/ref/fb/effectentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EffectEntityData {#constructor-2}
> **EffectEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [EffectEntityData](/vext/ref/fb/effectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [EffectEntityData](/vext/ref/fb/effectentitydata). |

### EffectEntityData {#constructor-3}
> **EffectEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [EffectEntityData](/vext/ref/fb/effectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [EffectEntityData](/vext/ref/fb/effectentitydata). |

### EffectEntityData {#constructor-4}
> **EffectEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EffectEntityData](/vext/ref/fb/effectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EffectEntityData](/vext/ref/fb/effectentitydata). |

### EffectEntityData {#constructor-5}
> **EffectEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EffectEntityData](/vext/ref/fb/effectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EffectEntityData](/vext/ref/fb/effectentitydata). |

### EffectEntityData {#constructor-6}
> **EffectEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectEntityData](/vext/ref/fb/effectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EffectEntityData](/vext/ref/fb/effectentitydata). |

## Properties
### {{% prop-heading "components" %}}
> **[GameObjectData](/vext/ref/fb/gameobjectdata)**[]

### {{% prop-heading "maxInstanceCount" %}}
> **int**

### {{% prop-heading "cullDistance" %}}
> **float**

### {{% prop-heading "startDelay" %}}
> **float**

### {{% prop-heading "highEndPc" %}}
> **bool**

### {{% prop-heading "mediumPc" %}}
> **bool**

### {{% prop-heading "lowEndPc" %}}
> **bool**

### {{% prop-heading "resetInstanceWhenStarted" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EffectEntityData](/vext/ref/fb/effectentitydata) type.

