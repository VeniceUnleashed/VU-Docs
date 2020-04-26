---
title: AnimationControlledStateData
---

Inherits from [CharacterStateData](/vext/ref/fb/characterstatedata)

## Summary

### Constructors

|  |
| --- |
| **[AnimationControlledStateData](#constructor-0)**() |
| **[AnimationControlledStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AnimationControlledStateData](#constructor-2)**(other: [CharacterStateData](/vext/ref/fb/characterstatedata)) |
| **[AnimationControlledStateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "upNormalTolerance" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AnimationControlledStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AnimationControlledStateData {#constructor-0}

> **AnimationControlledStateData**()

Creates a new [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata) frostbite instance.

### AnimationControlledStateData {#constructor-1}

> **AnimationControlledStateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AnimationControlledStateData {#constructor-2}

> **AnimationControlledStateData**(other: [CharacterStateData](/vext/ref/fb/characterstatedata))

Casts an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata) to [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterStateData](/vext/ref/fb/characterstatedata) | The instance to cast to [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata). |

### AnimationControlledStateData {#constructor-3}

> **AnimationControlledStateData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata). |

## Properties

### {{% prop-heading "upNormalTolerance" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AnimationControlledStateData](/vext/ref/fb/animationcontrolledstatedata) type.

