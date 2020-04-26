---
title: DynamicWeaponPickupSlotData
---

## Summary

### Constructors

|  |
| --- |
| **[DynamicWeaponPickupSlotData](#constructor-0)**() |
| **[DynamicWeaponPickupSlotData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weaponSlot" >}} | int |
| {{< prop "altWeaponSlot" >}} | int |
| {{< prop "linkedToWeaponSlot" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DynamicWeaponPickupSlotData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DynamicWeaponPickupSlotData {#constructor-0}

> **DynamicWeaponPickupSlotData**()

Creates a new [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata) frostbite instance.

### DynamicWeaponPickupSlotData {#constructor-1}

> **DynamicWeaponPickupSlotData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "weaponSlot" %}}

> **int**

### {{% prop-heading "altWeaponSlot" %}}

> **int**

### {{% prop-heading "linkedToWeaponSlot" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata) type.

