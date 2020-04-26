---
title: JumpStateData
---

Inherits from [CharacterStateData](/vext/ref/fb/characterstatedata)

## Summary

### Constructors

|  |
| --- |
| **[JumpStateData](#constructor-0)**() |
| **[JumpStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[JumpStateData](#constructor-2)**(other: [CharacterStateData](/vext/ref/fb/characterstatedata)) |
| **[JumpStateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "jumpHeight" >}} | float |
| {{< prop "jumpEffectSize" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "JumpStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### JumpStateData {#constructor-0}

> **JumpStateData**()

Creates a new [JumpStateData](/vext/ref/fb/jumpstatedata) frostbite instance.

### JumpStateData {#constructor-1}

> **JumpStateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [JumpStateData](/vext/ref/fb/jumpstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### JumpStateData {#constructor-2}

> **JumpStateData**(other: [CharacterStateData](/vext/ref/fb/characterstatedata))

Casts an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata) to [JumpStateData](/vext/ref/fb/jumpstatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterStateData](/vext/ref/fb/characterstatedata) | The instance to cast to [JumpStateData](/vext/ref/fb/jumpstatedata). |

### JumpStateData {#constructor-3}

> **JumpStateData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [JumpStateData](/vext/ref/fb/jumpstatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [JumpStateData](/vext/ref/fb/jumpstatedata). |

## Properties

### {{% prop-heading "jumpHeight" %}}

> **float**

### {{% prop-heading "jumpEffectSize" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [JumpStateData](/vext/ref/fb/jumpstatedata) type.

