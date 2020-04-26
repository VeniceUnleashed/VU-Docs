---
title: MixerPresetGroupData
---

## Summary

### Constructors

|  |
| --- |
| **[MixerPresetGroupData](#constructor-0)**() |
| **[MixerPresetGroupData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "group" >}} | [MixGroup](/vext/ref/fb/mixgroup) \| nil |
| {{< prop "state" >}} | [MixGroupState](/vext/ref/fb/mixgroupstate) |
| {{< prop "attackTime" >}} | float |
| {{< prop "releaseTime" >}} | float |
| {{< prop "properties" >}} | [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue)[] |
| {{< prop "isDominant" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerPresetGroupData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerPresetGroupData {#constructor-0}

> **MixerPresetGroupData**()

Creates a new [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata) frostbite instance.

### MixerPresetGroupData {#constructor-1}

> **MixerPresetGroupData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "group" %}}

> **[MixGroup](/vext/ref/fb/mixgroup)** \| **nil**

### {{% prop-heading "state" %}}

> **[MixGroupState](/vext/ref/fb/mixgroupstate)**

### {{% prop-heading "attackTime" %}}

> **float**

### {{% prop-heading "releaseTime" %}}

> **float**

### {{% prop-heading "properties" %}}

> **[MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue)**[]

### {{% prop-heading "isDominant" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerPresetGroupData](/vext/ref/fb/mixerpresetgroupdata) type.

