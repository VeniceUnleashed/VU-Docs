---
title: HidableSoldierMeshWeaponPart
---

## Summary

### Constructors

|  |
| --- |
| **[HidableSoldierMeshWeaponPart](#constructor-0)**() |
| **[HidableSoldierMeshWeaponPart](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weaponMesh" >}} | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset) \| nil |
| {{< prop "weaponMeshBlueprint" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "boneName" >}} | string |
| {{< prop "hideAlways" >}} | bool |
| {{< prop "hideInVehicleEntries" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HidableSoldierMeshWeaponPart" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HidableSoldierMeshWeaponPart {#constructor-0}

> **HidableSoldierMeshWeaponPart**()

Creates a new [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart) frostbite instance.

### HidableSoldierMeshWeaponPart {#constructor-1}

> **HidableSoldierMeshWeaponPart**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "weaponMesh" %}}

> **[SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset)** \| **nil**

### {{% prop-heading "weaponMeshBlueprint" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** \| **nil**

### {{% prop-heading "boneName" %}}

> **string**

### {{% prop-heading "hideAlways" %}}

> **bool**

### {{% prop-heading "hideInVehicleEntries" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HidableSoldierMeshWeaponPart](/vext/ref/fb/hidablesoldiermeshweaponpart) type.

