---
title: MeleeEntityCommonData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[MeleeEntityCommonData](#constructor-0)**() |
| **[MeleeEntityCommonData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MeleeEntityCommonData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MeleeEntityCommonData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "meleeBinding" >}} | [CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding) |
| {{< prop "meleeCommonBinding" >}} | [CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding) |
| {{< prop "triggerDelay" >}} | float |
| {{< prop "defendWindow" >}} | float |
| {{< prop "killDelay" >}} | float |
| {{< prop "meleeEndDelay" >}} | float |
| {{< prop "invalidMeleeAttackZone" >}} | float |
| {{< prop "meleeAttackDistance" >}} | float |
| {{< prop "maxAttackHeightDifference" >}} | float |
| {{< prop "killDamage" >}} | float |
| {{< prop "proneAttackType" >}} | [AntEnumeration](/vext/ref/fb/antenumeration) \| nil |
| {{< prop "crouchAttackType" >}} | [AntEnumeration](/vext/ref/fb/antenumeration) \| nil |
| {{< prop "enableAbortPossibility" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MeleeEntityCommonData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MeleeEntityCommonData {#constructor-0}

> **MeleeEntityCommonData**()

Creates a new [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata) frostbite instance.

### MeleeEntityCommonData {#constructor-1}

> **MeleeEntityCommonData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MeleeEntityCommonData {#constructor-2}

> **MeleeEntityCommonData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata). |

### MeleeEntityCommonData {#constructor-3}

> **MeleeEntityCommonData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata). |

## Properties

### {{% prop-heading "meleeBinding" %}}

> **[CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding)**

### {{% prop-heading "meleeCommonBinding" %}}

> **[CharacterMeleeCommonBinding](/vext/ref/fb/charactermeleecommonbinding)**

### {{% prop-heading "triggerDelay" %}}

> **float**

### {{% prop-heading "defendWindow" %}}

> **float**

### {{% prop-heading "killDelay" %}}

> **float**

### {{% prop-heading "meleeEndDelay" %}}

> **float**

### {{% prop-heading "invalidMeleeAttackZone" %}}

> **float**

### {{% prop-heading "meleeAttackDistance" %}}

> **float**

### {{% prop-heading "maxAttackHeightDifference" %}}

> **float**

### {{% prop-heading "killDamage" %}}

> **float**

### {{% prop-heading "proneAttackType" %}}

> **[AntEnumeration](/vext/ref/fb/antenumeration)** \| **nil**

### {{% prop-heading "crouchAttackType" %}}

> **[AntEnumeration](/vext/ref/fb/antenumeration)** \| **nil**

### {{% prop-heading "enableAbortPossibility" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MeleeEntityCommonData](/vext/ref/fb/meleeentitycommondata) type.

