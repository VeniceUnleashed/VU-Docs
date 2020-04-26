---
title: WeaponSwitchingMapData
---

## Summary

### Constructors

|  |
| --- |
| **[WeaponSwitchingMapData](#constructor-0)**() |
| **[WeaponSwitchingMapData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fromWeapon" >}} | [WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum) |
| {{< prop "action" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "toWeapon" >}} | [WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum)[] |
| {{< prop "fireAndSwitchBackToPrev" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponSwitchingMapData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponSwitchingMapData {#constructor-0}

> **WeaponSwitchingMapData**()

Creates a new [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata) frostbite instance.

### WeaponSwitchingMapData {#constructor-1}

> **WeaponSwitchingMapData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "fromWeapon" %}}

> **[WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum)**

### {{% prop-heading "action" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "toWeapon" %}}

> **[WeaponSwitchingEnum](/vext/ref/fb/weaponswitchingenum)**[]

### {{% prop-heading "fireAndSwitchBackToPrev" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponSwitchingMapData](/vext/ref/fb/weaponswitchingmapdata) type.

