---
title: DynamicWeaponPickupEntityData
---

Inherits from 
[PickupEntityData](/vext/ref/fb/pickupentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[DynamicWeaponPickupEntityData](#constructor-0)**() |
| **[DynamicWeaponPickupEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DynamicWeaponPickupEntityData](#constructor-2)**(other: [PickupEntityData](/vext/ref/fb/pickupentitydata)) |
| **[DynamicWeaponPickupEntityData](#constructor-3)**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata)) |
| **[DynamicWeaponPickupEntityData](#constructor-4)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[DynamicWeaponPickupEntityData](#constructor-5)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[DynamicWeaponPickupEntityData](#constructor-6)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[DynamicWeaponPickupEntityData](#constructor-7)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DynamicWeaponPickupEntityData](#constructor-8)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DynamicWeaponPickupEntityData](#constructor-9)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "weaponSlots" >}} | [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata)[] |
| {{< prop "keepAmmoState" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DynamicWeaponPickupEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DynamicWeaponPickupEntityData {#constructor-0}
> **DynamicWeaponPickupEntityData**()

Creates a new [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata) frostbite instance.

### DynamicWeaponPickupEntityData {#constructor-1}
> **DynamicWeaponPickupEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DynamicWeaponPickupEntityData {#constructor-2}
> **DynamicWeaponPickupEntityData**(other: [PickupEntityData](/vext/ref/fb/pickupentitydata))

Casts an instance of type [PickupEntityData](/vext/ref/fb/pickupentitydata) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PickupEntityData](/vext/ref/fb/pickupentitydata) | The instance to cast to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). |

### DynamicWeaponPickupEntityData {#constructor-3}
> **DynamicWeaponPickupEntityData**(other: [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata))

Casts an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata) | The instance to cast to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). |

### DynamicWeaponPickupEntityData {#constructor-4}
> **DynamicWeaponPickupEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). |

### DynamicWeaponPickupEntityData {#constructor-5}
> **DynamicWeaponPickupEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). |

### DynamicWeaponPickupEntityData {#constructor-6}
> **DynamicWeaponPickupEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). |

### DynamicWeaponPickupEntityData {#constructor-7}
> **DynamicWeaponPickupEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). |

### DynamicWeaponPickupEntityData {#constructor-8}
> **DynamicWeaponPickupEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). |

### DynamicWeaponPickupEntityData {#constructor-9}
> **DynamicWeaponPickupEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata). |

## Properties
### {{% prop-heading "weaponSlots" %}}
> **[DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata)**[]

### {{% prop-heading "keepAmmoState" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DynamicWeaponPickupEntityData](/vext/ref/fb/dynamicweaponpickupentitydata) type.

