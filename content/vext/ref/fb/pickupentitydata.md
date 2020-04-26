---
title: PickupEntityData
---

Inherits from 
[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[PickupEntityData](#constructor-0)**() |
| **[PickupEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PickupEntityData](#constructor-2)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[PickupEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[PickupEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[PickupEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PickupEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PickupEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PickupEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "randomizeAmmoOnDropForPlayer" >}} | [PickupPlayerEnum](/vext/ref/fb/pickupplayerenum) |
| {{< prop "minRandomClipAmmoPercent" >}} | int |
| {{< prop "physicsBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "mesh" >}} | [MeshAsset](/vext/ref/fb/meshasset) \| nil |
| {{< prop "maxRandomClipAmmoPercent" >}} | int |
| {{< prop "preferredWeaponSlot" >}} | int |
| {{< prop "timeToLive" >}} | float |
| {{< prop "minRandomSpareAmmoPercent" >}} | int |
| {{< prop "interactionRadius" >}} | float |
| {{< prop "maxRandomSpareAmmoPercent" >}} | int |
| {{< prop "unspawnOnPickup" >}} | bool |
| {{< prop "unspawnOnAmmoPickup" >}} | bool |
| {{< prop "forceWeaponSlotSelection" >}} | bool |
| {{< prop "displayInMiniMap" >}} | bool |
| {{< prop "hasAutomaticAmmoPickup" >}} | bool |
| {{< prop "useWeaponMesh" >}} | bool |
| {{< prop "allowPickup" >}} | bool |
| {{< prop "contentIsStatic" >}} | bool |
| {{< prop "positionIsStatic" >}} | bool |
| {{< prop "ignoreNullWeaponSlots" >}} | bool |
| {{< prop "replaceAllContent" >}} | bool |
| {{< prop "removeWeaponOnDrop" >}} | bool |
| {{< prop "sendPlayerInEventOnPickup" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PickupEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PickupEntityData {#constructor-0}
> **PickupEntityData**()

Creates a new [PickupEntityData](/vext/ref/fb/pickupentitydata) frostbite instance.

### PickupEntityData {#constructor-1}
> **PickupEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PickupEntityData](/vext/ref/fb/pickupentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PickupEntityData {#constructor-2}
> **PickupEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [PickupEntityData](/vext/ref/fb/pickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [PickupEntityData](/vext/ref/fb/pickupentitydata). |

### PickupEntityData {#constructor-3}
> **PickupEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [PickupEntityData](/vext/ref/fb/pickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [PickupEntityData](/vext/ref/fb/pickupentitydata). |

### PickupEntityData {#constructor-4}
> **PickupEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [PickupEntityData](/vext/ref/fb/pickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [PickupEntityData](/vext/ref/fb/pickupentitydata). |

### PickupEntityData {#constructor-5}
> **PickupEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PickupEntityData](/vext/ref/fb/pickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PickupEntityData](/vext/ref/fb/pickupentitydata). |

### PickupEntityData {#constructor-6}
> **PickupEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PickupEntityData](/vext/ref/fb/pickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PickupEntityData](/vext/ref/fb/pickupentitydata). |

### PickupEntityData {#constructor-7}
> **PickupEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PickupEntityData](/vext/ref/fb/pickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PickupEntityData](/vext/ref/fb/pickupentitydata). |

### PickupEntityData {#constructor-8}
> **PickupEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PickupEntityData](/vext/ref/fb/pickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PickupEntityData](/vext/ref/fb/pickupentitydata). |

## Properties
### {{% prop-heading "randomizeAmmoOnDropForPlayer" %}}
> **[PickupPlayerEnum](/vext/ref/fb/pickupplayerenum)**

### {{% prop-heading "minRandomClipAmmoPercent" %}}
> **int**

### {{% prop-heading "physicsBlueprint" %}}
> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** | **nil**

### {{% prop-heading "mesh" %}}
> **[MeshAsset](/vext/ref/fb/meshasset)** | **nil**

### {{% prop-heading "maxRandomClipAmmoPercent" %}}
> **int**

### {{% prop-heading "preferredWeaponSlot" %}}
> **int**

### {{% prop-heading "timeToLive" %}}
> **float**

### {{% prop-heading "minRandomSpareAmmoPercent" %}}
> **int**

### {{% prop-heading "interactionRadius" %}}
> **float**

### {{% prop-heading "maxRandomSpareAmmoPercent" %}}
> **int**

### {{% prop-heading "unspawnOnPickup" %}}
> **bool**

### {{% prop-heading "unspawnOnAmmoPickup" %}}
> **bool**

### {{% prop-heading "forceWeaponSlotSelection" %}}
> **bool**

### {{% prop-heading "displayInMiniMap" %}}
> **bool**

### {{% prop-heading "hasAutomaticAmmoPickup" %}}
> **bool**

### {{% prop-heading "useWeaponMesh" %}}
> **bool**

### {{% prop-heading "allowPickup" %}}
> **bool**

### {{% prop-heading "contentIsStatic" %}}
> **bool**

### {{% prop-heading "positionIsStatic" %}}
> **bool**

### {{% prop-heading "ignoreNullWeaponSlots" %}}
> **bool**

### {{% prop-heading "replaceAllContent" %}}
> **bool**

### {{% prop-heading "removeWeaponOnDrop" %}}
> **bool**

### {{% prop-heading "sendPlayerInEventOnPickup" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PickupEntityData](/vext/ref/fb/pickupentitydata) type.

