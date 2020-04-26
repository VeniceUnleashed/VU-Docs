---
title: InteractionEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[InteractionEntityData](#constructor-0)**() |
| **[InteractionEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[InteractionEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[InteractionEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[InteractionEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[InteractionEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[InteractionEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[InteractionEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "useWithinRadius" >}} | float |
| {{< prop "useWithinAngle" >}} | float |
| {{< prop "preInteractionSoundEffect" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "maxUses" >}} | int |
| {{< prop "allowInteractionViaRemoteEntry" >}} | bool |
| {{< prop "testIfOccluded" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InteractionEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InteractionEntityData {#constructor-0}
> **InteractionEntityData**()

Creates a new [InteractionEntityData](/vext/ref/fb/interactionentitydata) frostbite instance.

### InteractionEntityData {#constructor-1}
> **InteractionEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [InteractionEntityData](/vext/ref/fb/interactionentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### InteractionEntityData {#constructor-2}
> **InteractionEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [InteractionEntityData](/vext/ref/fb/interactionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [InteractionEntityData](/vext/ref/fb/interactionentitydata). |

### InteractionEntityData {#constructor-3}
> **InteractionEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [InteractionEntityData](/vext/ref/fb/interactionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [InteractionEntityData](/vext/ref/fb/interactionentitydata). |

### InteractionEntityData {#constructor-4}
> **InteractionEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [InteractionEntityData](/vext/ref/fb/interactionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [InteractionEntityData](/vext/ref/fb/interactionentitydata). |

### InteractionEntityData {#constructor-5}
> **InteractionEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [InteractionEntityData](/vext/ref/fb/interactionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [InteractionEntityData](/vext/ref/fb/interactionentitydata). |

### InteractionEntityData {#constructor-6}
> **InteractionEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [InteractionEntityData](/vext/ref/fb/interactionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [InteractionEntityData](/vext/ref/fb/interactionentitydata). |

### InteractionEntityData {#constructor-7}
> **InteractionEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InteractionEntityData](/vext/ref/fb/interactionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [InteractionEntityData](/vext/ref/fb/interactionentitydata). |

## Properties
### {{% prop-heading "useWithinRadius" %}}
> **float**

### {{% prop-heading "useWithinAngle" %}}
> **float**

### {{% prop-heading "preInteractionSoundEffect" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "maxUses" %}}
> **int**

### {{% prop-heading "allowInteractionViaRemoteEntry" %}}
> **bool**

### {{% prop-heading "testIfOccluded" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InteractionEntityData](/vext/ref/fb/interactionentitydata) type.

