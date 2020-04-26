---
title: GunSwayBaseData
---

## Summary

### Constructors

|  |
| --- |
| **[GunSwayBaseData](#constructor-0)**() |
| **[GunSwayBaseData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "baseValue" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "recoil" >}} | [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) |
| {{< prop "gunSwayLag" >}} | [GunSwayLagData](/vext/ref/fb/gunswaylagdata) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GunSwayBaseData](/vext/ref/fb/gunswaybasedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayBaseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayBaseData {#constructor-0}

> **GunSwayBaseData**()

Creates a new [GunSwayBaseData](/vext/ref/fb/gunswaybasedata) frostbite instance.

### GunSwayBaseData {#constructor-1}

> **GunSwayBaseData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayBaseData](/vext/ref/fb/gunswaybasedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "baseValue" %}}

> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "recoil" %}}

> **[GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata)**

### {{% prop-heading "gunSwayLag" %}}

> **[GunSwayLagData](/vext/ref/fb/gunswaylagdata)**

## Methods

### Clone {#clone}

> **Clone**(): [GunSwayBaseData](/vext/ref/fb/gunswaybasedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GunSwayBaseData](/vext/ref/fb/gunswaybasedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayBaseData](/vext/ref/fb/gunswaybasedata) type.

