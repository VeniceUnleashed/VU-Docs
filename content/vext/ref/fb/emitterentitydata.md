---
title: EmitterEntityData
---

Inherits from 
[EffectEntityData](/vext/ref/fb/effectentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[EmitterEntityData](#constructor-0)**() |
| **[EmitterEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EmitterEntityData](#constructor-2)**(other: [EffectEntityData](/vext/ref/fb/effectentitydata)) |
| **[EmitterEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[EmitterEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[EmitterEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EmitterEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EmitterEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "emitter" >}} | [EmitterAsset](/vext/ref/fb/emitterasset) \| nil |
| {{< prop "spawnProbability" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EmitterEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EmitterEntityData {#constructor-0}
> **EmitterEntityData**()

Creates a new [EmitterEntityData](/vext/ref/fb/emitterentitydata) frostbite instance.

### EmitterEntityData {#constructor-1}
> **EmitterEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EmitterEntityData](/vext/ref/fb/emitterentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EmitterEntityData {#constructor-2}
> **EmitterEntityData**(other: [EffectEntityData](/vext/ref/fb/effectentitydata))

Casts an instance of type [EffectEntityData](/vext/ref/fb/effectentitydata) to [EmitterEntityData](/vext/ref/fb/emitterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EffectEntityData](/vext/ref/fb/effectentitydata) | The instance to cast to [EmitterEntityData](/vext/ref/fb/emitterentitydata). |

### EmitterEntityData {#constructor-3}
> **EmitterEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [EmitterEntityData](/vext/ref/fb/emitterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [EmitterEntityData](/vext/ref/fb/emitterentitydata). |

### EmitterEntityData {#constructor-4}
> **EmitterEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [EmitterEntityData](/vext/ref/fb/emitterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [EmitterEntityData](/vext/ref/fb/emitterentitydata). |

### EmitterEntityData {#constructor-5}
> **EmitterEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EmitterEntityData](/vext/ref/fb/emitterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EmitterEntityData](/vext/ref/fb/emitterentitydata). |

### EmitterEntityData {#constructor-6}
> **EmitterEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EmitterEntityData](/vext/ref/fb/emitterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EmitterEntityData](/vext/ref/fb/emitterentitydata). |

### EmitterEntityData {#constructor-7}
> **EmitterEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EmitterEntityData](/vext/ref/fb/emitterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EmitterEntityData](/vext/ref/fb/emitterentitydata). |

## Properties
### {{% prop-heading "emitter" %}}
> **[EmitterAsset](/vext/ref/fb/emitterasset)** | **nil**

### {{% prop-heading "spawnProbability" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EmitterEntityData](/vext/ref/fb/emitterentitydata) type.

