---
title: GunSwayCrouchProneData
---

## Summary

### Constructors

|  |
| --- |
| **[GunSwayCrouchProneData](#constructor-0)**() |
| **[GunSwayCrouchProneData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "noZoom" >}} | [GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata) |
| {{< prop "zoom" >}} | [GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayCrouchProneData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayCrouchProneData {#constructor-0}

> **GunSwayCrouchProneData**()

Creates a new [GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata) frostbite instance.

### GunSwayCrouchProneData {#constructor-1}

> **GunSwayCrouchProneData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "noZoom" %}}

> **[GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata)**

### {{% prop-heading "zoom" %}}

> **[GunSwayBaseMoveData](/vext/ref/fb/gunswaybasemovedata)**

## Methods

### Clone {#clone}

> **Clone**(): [GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayCrouchProneData](/vext/ref/fb/gunswaycrouchpronedata) type.

