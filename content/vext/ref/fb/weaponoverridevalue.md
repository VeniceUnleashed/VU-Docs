---
title: WeaponOverrideValue
---

## Summary

### Constructors

|  |
| --- |
| **[WeaponOverrideValue](#constructor-0)**() |
| **[WeaponOverrideValue](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "valueType" >}} | [WeaponOverrideValueType](/vext/ref/fb/weaponoverridevaluetype) |
| {{< prop "value" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponOverrideValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponOverrideValue {#constructor-0}

> **WeaponOverrideValue**()

Creates a new [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue) frostbite instance.

### WeaponOverrideValue {#constructor-1}

> **WeaponOverrideValue**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "valueType" %}}

> **[WeaponOverrideValueType](/vext/ref/fb/weaponoverridevaluetype)**

### {{% prop-heading "value" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue) type.

