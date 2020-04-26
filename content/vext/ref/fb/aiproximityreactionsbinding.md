---
title: AIProximityReactionsBinding
---

## Summary

### Constructors

|  |
| --- |
| **[AIProximityReactionsBinding](#constructor-0)**() |
| **[AIProximityReactionsBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "aiReaction" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "aiExplosionReaction" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "aiExplosionForce" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "aiStunReaction" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "aiStunReactionRandomFactor" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "aiReactionDirection" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "fireNearby" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "aimUpAndDown" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "focusAimScale" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "focusAiming" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "enableProceduralHeadAim" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "killFromAnimation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "playerAnimationKill" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "playerInitiatedRagdoll" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AIProximityReactionsBinding](/vext/ref/fb/aiproximityreactionsbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AIProximityReactionsBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AIProximityReactionsBinding {#constructor-0}

> **AIProximityReactionsBinding**()

Creates a new [AIProximityReactionsBinding](/vext/ref/fb/aiproximityreactionsbinding) frostbite instance.

### AIProximityReactionsBinding {#constructor-1}

> **AIProximityReactionsBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AIProximityReactionsBinding](/vext/ref/fb/aiproximityreactionsbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "aiReaction" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "aiExplosionReaction" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "aiExplosionForce" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "aiStunReaction" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "aiStunReactionRandomFactor" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "aiReactionDirection" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "fireNearby" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "aimUpAndDown" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "focusAimScale" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "focusAiming" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "enableProceduralHeadAim" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "killFromAnimation" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "playerAnimationKill" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "playerInitiatedRagdoll" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [AIProximityReactionsBinding](/vext/ref/fb/aiproximityreactionsbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AIProximityReactionsBinding](/vext/ref/fb/aiproximityreactionsbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AIProximityReactionsBinding](/vext/ref/fb/aiproximityreactionsbinding) type.

