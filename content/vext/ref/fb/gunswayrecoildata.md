---
title: GunSwayRecoilData
---

## Summary

### Constructors

|  |
| --- |
| **[GunSwayRecoilData](#constructor-0)**() |
| **[GunSwayRecoilData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "recoilAmplitudeMax" >}} | float |
| {{< prop "recoilAmplitudeIncPerShot" >}} | float |
| {{< prop "horizontalRecoilAmplitudeIncPerShotMin" >}} | float |
| {{< prop "horizontalRecoilAmplitudeIncPerShotMax" >}} | float |
| {{< prop "horizontalRecoilAmplitudeMax" >}} | float |
| {{< prop "recoilAmplitudeDecreaseFactor" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayRecoilData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayRecoilData {#constructor-0}

> **GunSwayRecoilData**()

Creates a new [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) frostbite instance.

### GunSwayRecoilData {#constructor-1}

> **GunSwayRecoilData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "recoilAmplitudeMax" %}}

> **float**

### {{% prop-heading "recoilAmplitudeIncPerShot" %}}

> **float**

### {{% prop-heading "horizontalRecoilAmplitudeIncPerShotMin" %}}

> **float**

### {{% prop-heading "horizontalRecoilAmplitudeIncPerShotMax" %}}

> **float**

### {{% prop-heading "horizontalRecoilAmplitudeMax" %}}

> **float**

### {{% prop-heading "recoilAmplitudeDecreaseFactor" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) type.

