---
title: DirectWeaponSwitchingMapData
---

## Summary

### Constructors

|  |
| --- |
| **[DirectWeaponSwitchingMapData](#constructor-0)**() |
| **[DirectWeaponSwitchingMapData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "action" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "toWeapon" >}} | [WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum) |
| {{< prop "preventMeleeRepeatTime" >}} | float |
| {{< prop "switchBackToPrevMaxTimePressed" >}} | float |
| {{< prop "useQuickSwitch" >}} | bool |
| {{< prop "fireAndSwitchBackToPrev" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DirectWeaponSwitchingMapData](/vext/ref/fb/directweaponswitchingmapdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DirectWeaponSwitchingMapData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DirectWeaponSwitchingMapData {#constructor-0}

> **DirectWeaponSwitchingMapData**()

Creates a new [DirectWeaponSwitchingMapData](/vext/ref/fb/directweaponswitchingmapdata) frostbite instance.

### DirectWeaponSwitchingMapData {#constructor-1}

> **DirectWeaponSwitchingMapData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DirectWeaponSwitchingMapData](/vext/ref/fb/directweaponswitchingmapdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "action" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "toWeapon" %}}

> **[WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum)**

### {{% prop-heading "preventMeleeRepeatTime" %}}

> **float**

### {{% prop-heading "switchBackToPrevMaxTimePressed" %}}

> **float**

### {{% prop-heading "useQuickSwitch" %}}

> **bool**

### {{% prop-heading "fireAndSwitchBackToPrev" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [DirectWeaponSwitchingMapData](/vext/ref/fb/directweaponswitchingmapdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DirectWeaponSwitchingMapData](/vext/ref/fb/directweaponswitchingmapdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DirectWeaponSwitchingMapData](/vext/ref/fb/directweaponswitchingmapdata) type.

