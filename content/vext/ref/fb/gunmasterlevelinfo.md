---
title: GunMasterLevelInfo
---

## Summary

### Constructors

|  |
| --- |
| **[GunMasterLevelInfo](#constructor-0)**() |
| **[GunMasterLevelInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "customizeData" >}} | [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata) \| nil |
| {{< prop "killsNeeded" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunMasterLevelInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunMasterLevelInfo {#constructor-0}

> **GunMasterLevelInfo**()

Creates a new [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo) frostbite instance.

### GunMasterLevelInfo {#constructor-1}

> **GunMasterLevelInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "customizeData" %}}

> **[CustomizeSoldierData](/vext/ref/fb/customizesoldierdata)** \| **nil**

### {{% prop-heading "killsNeeded" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunMasterLevelInfo](/vext/ref/fb/gunmasterlevelinfo) type.

