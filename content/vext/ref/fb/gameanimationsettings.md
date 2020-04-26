---
title: GameAnimationSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[GameAnimationSettings](#constructor-0)**() |
| **[GameAnimationSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GameAnimationSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[GameAnimationSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "temporalLoddingFourthDeltaTime" >}} | float |
| {{< prop "antOnClientOnlyGamemodes" >}} | string[] |
| {{< prop "temporalLoddingFarDistance" >}} | float |
| {{< prop "temporalLoddingSixthDeltaTime" >}} | float |
| {{< prop "temporalLoddingFifthDeltaTime" >}} | float |
| {{< prop "temporalLoddingFirstDeltaTime" >}} | float |
| {{< prop "temporalLoddingSecondDeltaTime" >}} | float |
| {{< prop "temporalLoddingThirdDeltaTime" >}} | float |
| {{< prop "temporalLoddingSixthDistance" >}} | float |
| {{< prop "temporalLoddingSecondDistance" >}} | float |
| {{< prop "temporalLoddingFifthDistance" >}} | float |
| {{< prop "temporalLoddingFirstDistance" >}} | float |
| {{< prop "temporalLoddingThirdDistance" >}} | float |
| {{< prop "temporalLoddingFourthDistance" >}} | float |
| {{< prop "serverEnable" >}} | bool |
| {{< prop "useRawGamepadInput" >}} | bool |
| {{< prop "clientEnable" >}} | bool |
| {{< prop "useAnimationDrivenCharacter" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameAnimationSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameAnimationSettings {#constructor-0}

> **GameAnimationSettings**()

Creates a new [GameAnimationSettings](/vext/ref/fb/gameanimationsettings) frostbite instance.

### GameAnimationSettings {#constructor-1}

> **GameAnimationSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameAnimationSettings](/vext/ref/fb/gameanimationsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GameAnimationSettings {#constructor-2}

> **GameAnimationSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [GameAnimationSettings](/vext/ref/fb/gameanimationsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [GameAnimationSettings](/vext/ref/fb/gameanimationsettings). |

### GameAnimationSettings {#constructor-3}

> **GameAnimationSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GameAnimationSettings](/vext/ref/fb/gameanimationsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GameAnimationSettings](/vext/ref/fb/gameanimationsettings). |

## Properties

### {{% prop-heading "temporalLoddingFourthDeltaTime" %}}

> **float**

### {{% prop-heading "antOnClientOnlyGamemodes" %}}

> **string**[]

### {{% prop-heading "temporalLoddingFarDistance" %}}

> **float**

### {{% prop-heading "temporalLoddingSixthDeltaTime" %}}

> **float**

### {{% prop-heading "temporalLoddingFifthDeltaTime" %}}

> **float**

### {{% prop-heading "temporalLoddingFirstDeltaTime" %}}

> **float**

### {{% prop-heading "temporalLoddingSecondDeltaTime" %}}

> **float**

### {{% prop-heading "temporalLoddingThirdDeltaTime" %}}

> **float**

### {{% prop-heading "temporalLoddingSixthDistance" %}}

> **float**

### {{% prop-heading "temporalLoddingSecondDistance" %}}

> **float**

### {{% prop-heading "temporalLoddingFifthDistance" %}}

> **float**

### {{% prop-heading "temporalLoddingFirstDistance" %}}

> **float**

### {{% prop-heading "temporalLoddingThirdDistance" %}}

> **float**

### {{% prop-heading "temporalLoddingFourthDistance" %}}

> **float**

### {{% prop-heading "serverEnable" %}}

> **bool**

### {{% prop-heading "useRawGamepadInput" %}}

> **bool**

### {{% prop-heading "clientEnable" %}}

> **bool**

### {{% prop-heading "useAnimationDrivenCharacter" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameAnimationSettings](/vext/ref/fb/gameanimationsettings) type.

