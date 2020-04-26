---
title: GunSwayBaseMoveJumpData
---

## Summary

### Constructors

|  |
| --- |
| **[GunSwayBaseMoveJumpData](#constructor-0)**() |
| **[GunSwayBaseMoveJumpData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "baseValue" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "moving" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "jumping" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "sprinting" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "vaultingSmallObject" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "vaultingMediumObject" >}} | [GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata) |
| {{< prop "recoil" >}} | [GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata) |
| {{< prop "gunSwayLag" >}} | [GunSwayLagData](/vext/ref/fb/gunswaylagdata) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayBaseMoveJumpData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayBaseMoveJumpData {#constructor-0}

> **GunSwayBaseMoveJumpData**()

Creates a new [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata) frostbite instance.

### GunSwayBaseMoveJumpData {#constructor-1}

> **GunSwayBaseMoveJumpData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "baseValue" %}}

> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "moving" %}}

> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "jumping" %}}

> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "sprinting" %}}

> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "vaultingSmallObject" %}}

> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "vaultingMediumObject" %}}

> **[GunSwayDispersionData](/vext/ref/fb/gunswaydispersiondata)**

### {{% prop-heading "recoil" %}}

> **[GunSwayRecoilData](/vext/ref/fb/gunswayrecoildata)**

### {{% prop-heading "gunSwayLag" %}}

> **[GunSwayLagData](/vext/ref/fb/gunswaylagdata)**

## Methods

### Clone {#clone}

> **Clone**(): [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata) type.

