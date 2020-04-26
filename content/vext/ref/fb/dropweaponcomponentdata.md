---
title: DropWeaponComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[DropWeaponComponentData](#constructor-0)**() |
| **[DropWeaponComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DropWeaponComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[DropWeaponComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DropWeaponComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DropWeaponComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "deathPickup" >}} | [PickupEntityAsset](/vext/ref/fb/pickupentityasset) \| nil |
| {{< prop "actionIdentifier" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "dropWeaponAfterTime" >}} | float |
| {{< prop "pickup" >}} | [PickupEntityAsset](/vext/ref/fb/pickupentityasset) \| nil |
| {{< prop "excludedWeaponSlots" >}} | [WeaponSlot](/vext/ref/fb/weaponslot)[] |
| {{< prop "weaponDropTime" >}} | float |
| {{< prop "listenToAnimationWeaponDropSignal" >}} | bool |
| {{< prop "allowDropWeaponOnAction" >}} | bool |
| {{< prop "requireWeaponSlotEmpty" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DropWeaponComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DropWeaponComponentData {#constructor-0}
> **DropWeaponComponentData**()

Creates a new [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata) frostbite instance.

### DropWeaponComponentData {#constructor-1}
> **DropWeaponComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DropWeaponComponentData {#constructor-2}
> **DropWeaponComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata). |

### DropWeaponComponentData {#constructor-3}
> **DropWeaponComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata). |

### DropWeaponComponentData {#constructor-4}
> **DropWeaponComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata). |

### DropWeaponComponentData {#constructor-5}
> **DropWeaponComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata). |

## Properties
### {{% prop-heading "deathPickup" %}}
> **[PickupEntityAsset](/vext/ref/fb/pickupentityasset)** | **nil**

### {{% prop-heading "actionIdentifier" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "dropWeaponAfterTime" %}}
> **float**

### {{% prop-heading "pickup" %}}
> **[PickupEntityAsset](/vext/ref/fb/pickupentityasset)** | **nil**

### {{% prop-heading "excludedWeaponSlots" %}}
> **[WeaponSlot](/vext/ref/fb/weaponslot)**[]

### {{% prop-heading "weaponDropTime" %}}
> **float**

### {{% prop-heading "listenToAnimationWeaponDropSignal" %}}
> **bool**

### {{% prop-heading "allowDropWeaponOnAction" %}}
> **bool**

### {{% prop-heading "requireWeaponSlotEmpty" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DropWeaponComponentData](/vext/ref/fb/dropweaponcomponentdata) type.

