---
title: SpecialMoveVaultStateCriteria
---

## Summary

### Constructors

|  |
| --- |
| **[SpecialMoveVaultStateCriteria](#constructor-0)**() |
| **[SpecialMoveVaultStateCriteria](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "distToObject" >}} | float |
| {{< prop "distToObjectTolerance" >}} | float |
| {{< prop "heightOfObject" >}} | float |
| {{< prop "heightOfObjectTolerance" >}} | float |
| {{< prop "lengthOfObject" >}} | float |
| {{< prop "lengthOfObjectTolerance" >}} | float |
| {{< prop "specialMoveState" >}} | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpecialMoveVaultStateCriteria" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpecialMoveVaultStateCriteria {#constructor-0}

> **SpecialMoveVaultStateCriteria**()

Creates a new [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria) frostbite instance.

### SpecialMoveVaultStateCriteria {#constructor-1}

> **SpecialMoveVaultStateCriteria**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "distToObject" %}}

> **float**

### {{% prop-heading "distToObjectTolerance" %}}

> **float**

### {{% prop-heading "heightOfObject" %}}

> **float**

### {{% prop-heading "heightOfObjectTolerance" %}}

> **float**

### {{% prop-heading "lengthOfObject" %}}

> **float**

### {{% prop-heading "lengthOfObjectTolerance" %}}

> **float**

### {{% prop-heading "specialMoveState" %}}

> **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)**

## Methods

### Clone {#clone}

> **Clone**(): [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria) type.

