---
title: AimingConstraintEntityCommonData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[AimingConstraintEntityCommonData](#constructor-0)**() |
| **[AimingConstraintEntityCommonData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AimingConstraintEntityCommonData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AimingConstraintEntityCommonData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "aimingConstraintsBinding" >}} | [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding) |
| {{< prop "aimingConstraints" >}} | [AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata) |
| {{< prop "disableAimingConstraintsDelay" >}} | float |
| {{< prop "constraintMoveSpeedMultiplier" >}} | float |
| {{< prop "shuffleAnimationThreshold" >}} | float |
| {{< prop "shuffleAnimationDelay" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AimingConstraintEntityCommonData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AimingConstraintEntityCommonData {#constructor-0}

> **AimingConstraintEntityCommonData**()

Creates a new [AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata) frostbite instance.

### AimingConstraintEntityCommonData {#constructor-1}

> **AimingConstraintEntityCommonData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AimingConstraintEntityCommonData {#constructor-2}

> **AimingConstraintEntityCommonData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata). |

### AimingConstraintEntityCommonData {#constructor-3}

> **AimingConstraintEntityCommonData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata). |

## Properties

### {{% prop-heading "aimingConstraintsBinding" %}}

> **[AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding)**

### {{% prop-heading "aimingConstraints" %}}

> **[AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata)**

### {{% prop-heading "disableAimingConstraintsDelay" %}}

> **float**

### {{% prop-heading "constraintMoveSpeedMultiplier" %}}

> **float**

### {{% prop-heading "shuffleAnimationThreshold" %}}

> **float**

### {{% prop-heading "shuffleAnimationDelay" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AimingConstraintEntityCommonData](/vext/ref/fb/aimingconstraintentitycommondata) type.

