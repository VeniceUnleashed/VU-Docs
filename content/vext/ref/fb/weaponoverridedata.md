---
title: WeaponOverrideData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[WeaponOverrideData](#constructor-0)**() |
| **[WeaponOverrideData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponOverrideData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "data" >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "values" >}} | [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponOverrideData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponOverrideData {#constructor-0}

> **WeaponOverrideData**()

Creates a new [WeaponOverrideData](/vext/ref/fb/weaponoverridedata) frostbite instance.

### WeaponOverrideData {#constructor-1}

> **WeaponOverrideData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponOverrideData](/vext/ref/fb/weaponoverridedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponOverrideData {#constructor-2}

> **WeaponOverrideData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponOverrideData](/vext/ref/fb/weaponoverridedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponOverrideData](/vext/ref/fb/weaponoverridedata). |

## Properties

### {{% prop-heading "data" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

### {{% prop-heading "values" %}}

> **[WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponOverrideData](/vext/ref/fb/weaponoverridedata) type.

