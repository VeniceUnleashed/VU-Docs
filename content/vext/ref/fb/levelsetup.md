---
title: LevelSetup
---

## Summary

### Constructors

|  |
| --- |
| **[LevelSetup](#constructor-0)**() |
| **[LevelSetup](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "inclusionOptions" >}} | [LevelSetupOption](/vext/ref/fb/levelsetupoption)[] |
| {{< prop "difficultyIndex" >}} | int |
| {{< prop "subLevelNames" >}} | string[] |
| {{< prop "subLevelStates" >}} | int[] |
| {{< prop "isSaveGame" >}} | bool |
| {{< prop "forceReloadResources" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [LevelSetup](/vext/ref/fb/levelsetup) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LevelSetup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LevelSetup {#constructor-0}

> **LevelSetup**()

Creates a new [LevelSetup](/vext/ref/fb/levelsetup) frostbite instance.

### LevelSetup {#constructor-1}

> **LevelSetup**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LevelSetup](/vext/ref/fb/levelsetup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "inclusionOptions" %}}

> **[LevelSetupOption](/vext/ref/fb/levelsetupoption)**[]

### {{% prop-heading "difficultyIndex" %}}

> **int**

### {{% prop-heading "subLevelNames" %}}

> **string**[]

### {{% prop-heading "subLevelStates" %}}

> **int**[]

### {{% prop-heading "isSaveGame" %}}

> **bool**

### {{% prop-heading "forceReloadResources" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [LevelSetup](/vext/ref/fb/levelsetup)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LevelSetup](/vext/ref/fb/levelsetup)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LevelSetup](/vext/ref/fb/levelsetup) type.

