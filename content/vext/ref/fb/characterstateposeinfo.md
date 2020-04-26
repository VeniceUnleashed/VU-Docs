---
title: CharacterStatePoseInfo
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[CharacterStatePoseInfo](#constructor-0)**() |
| **[CharacterStatePoseInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CharacterStatePoseInfo](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "poseType" >}} | [CharacterPoseType](/vext/ref/fb/characterposetype) |
| {{< prop "velocity" >}} | float |
| {{< prop "accelerationGain" >}} | float |
| {{< prop "decelerationGain" >}} | float |
| {{< prop "sprintGain" >}} | float |
| {{< prop "sprintMultiplier" >}} | float |
| {{< prop "speedModifier" >}} | [SpeedModifierData](/vext/ref/fb/speedmodifierdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterStatePoseInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterStatePoseInfo {#constructor-0}

> **CharacterStatePoseInfo**()

Creates a new [CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo) frostbite instance.

### CharacterStatePoseInfo {#constructor-1}

> **CharacterStatePoseInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CharacterStatePoseInfo {#constructor-2}

> **CharacterStatePoseInfo**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo). |

## Properties

### {{% prop-heading "poseType" %}}

> **[CharacterPoseType](/vext/ref/fb/characterposetype)**

### {{% prop-heading "velocity" %}}

> **float**

### {{% prop-heading "accelerationGain" %}}

> **float**

### {{% prop-heading "decelerationGain" %}}

> **float**

### {{% prop-heading "sprintGain" %}}

> **float**

### {{% prop-heading "sprintMultiplier" %}}

> **float**

### {{% prop-heading "speedModifier" %}}

> **[SpeedModifierData](/vext/ref/fb/speedmodifierdata)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterStatePoseInfo](/vext/ref/fb/characterstateposeinfo) type.

