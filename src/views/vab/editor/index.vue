<template>
  <div class="editor-container">
    <vab-page-header description="编辑器组件示例" :icon="['fas', 'edit']" title="编辑器" />
    <el-card shadow="never">
      <div class="editor-content">
        <div class="editor-demo">
          <h3>富文本编辑器</h3>
          <div class="editor-toolbar">
            <el-button-group>
              <el-button @click="formatText('bold')" :class="{ active: isBold }">
                <vab-icon :icon="['fas', 'bold']" />
              </el-button>
              <el-button @click="formatText('italic')" :class="{ active: isItalic }">
                <vab-icon :icon="['fas', 'italic']" />
              </el-button>
              <el-button @click="formatText('underline')" :class="{ active: isUnderline }">
                <vab-icon :icon="['fas', 'underline']" />
              </el-button>
            </el-button-group>

            <el-button-group style="margin-left: 10px">
              <el-button @click="formatText('justifyLeft')">
                <vab-icon :icon="['fas', 'align-left']" />
              </el-button>
              <el-button @click="formatText('justifyCenter')">
                <vab-icon :icon="['fas', 'align-center']" />
              </el-button>
              <el-button @click="formatText('justifyRight')">
                <vab-icon :icon="['fas', 'align-right']" />
              </el-button>
            </el-button-group>

            <el-select v-model="fontSize" @change="changeFontSize" size="small" style="margin-left: 10px; width: 100px">
              <el-option label="小" value="1"></el-option>
              <el-option label="中" value="3"></el-option>
              <el-option label="大" value="5"></el-option>
              <el-option label="很大" value="7"></el-option>
            </el-select>

            <el-button @click="insertImage" style="margin-left: 10px" size="small">
              <vab-icon :icon="['fas', 'image']" />
              插入图片
            </el-button>

            <el-button @click="insertLink" style="margin-left: 10px" size="small">
              <vab-icon :icon="['fas', 'link']" />
              插入链接
            </el-button>
          </div>

          <div class="editor-wrapper">
            <div
              ref="editor"
              class="editor"
              contenteditable="true"
              @input="onEditorInput"
              @keyup="updateToolbarState"
              @mouseup="updateToolbarState"
            >
              <p>欢迎使用富文本编辑器！</p>
              <p>你可以在这里编辑文本，添加格式，插入图片和链接。</p>
              <p>尝试使用上方的工具栏来格式化文本。</p>
            </div>
          </div>

          <div class="editor-actions">
            <el-button type="primary" @click="getContent">获取内容</el-button>
            <el-button @click="clearContent">清空内容</el-button>
            <el-button @click="setContent">设置示例内容</el-button>
          </div>

          <div class="editor-preview" v-if="showPreview">
            <h4>内容预览：</h4>
            <div class="preview-content" v-html="editorContent"></div>
          </div>
        </div>

        <div class="markdown-demo">
          <h3>Markdown编辑器</h3>
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="markdown-editor">
                <el-input type="textarea" :rows="10" placeholder="请输入Markdown内容" v-model="markdownContent"></el-input>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="markdown-preview">
                <div class="preview-content" v-html="renderedMarkdown"></div>
              </div>
            </el-col>
          </el-row>
          <div class="markdown-actions">
            <el-button @click="insertMarkdownSample">插入示例</el-button>
            <el-button @click="clearMarkdown">清空内容</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import VabPageHeader from '@/components/VabPageHeader'
  import { marked } from 'marked'

  export default {
    name: 'Editor',
    components: {
      VabPageHeader,
    },
    data() {
      return {
        isBold: false,
        isItalic: false,
        isUnderline: false,
        fontSize: '3',
        editorContent: '',
        showPreview: false,
        markdownContent:
          '# 欢迎使用Markdown编辑器\n\n你可以在这里编写Markdown格式的内容：\n\n- 列表项1\n- 列表项2\n\n**粗体文字**\n\n*斜体文字*\n\n[链接](https://github.com)',
      }
    },
    computed: {
      renderedMarkdown() {
        return marked(this.markdownContent)
      },
    },
    methods: {
      formatText(command) {
        document.execCommand(command, false, null)
        this.updateToolbarState()
        this.$refs.editor.focus()
      },

      changeFontSize(size) {
        document.execCommand('fontSize', false, size)
        this.$refs.editor.focus()
      },

      insertImage() {
        const url = prompt('请输入图片链接:')
        if (url) {
          document.execCommand('insertImage', false, url)
        }
        this.$refs.editor.focus()
      },

      insertLink() {
        const url = prompt('请输入链接地址:')
        if (url) {
          document.execCommand('createLink', false, url)
        }
        this.$refs.editor.focus()
      },

      onEditorInput() {
        this.editorContent = this.$refs.editor.innerHTML
      },

      updateToolbarState() {
        this.isBold = document.queryCommandState('bold')
        this.isItalic = document.queryCommandState('italic')
        this.isUnderline = document.queryCommandState('underline')
      },

      getContent() {
        this.editorContent = this.$refs.editor.innerHTML
        this.showPreview = true
        this.$message.success('内容获取成功')
      },

      clearContent() {
        this.$refs.editor.innerHTML = ''
        this.editorContent = ''
        this.showPreview = false
        this.updateToolbarState()
      },

      setContent() {
        this.$refs.editor.innerHTML = `
          <h2>示例标题</h2>
          <p>这是一段<strong>加粗</strong>的文字。</p>
          <p>这是一段<em>斜体</em>的文字。</p>
          <p>这是一段<u>下划线</u>的文字。</p>
          <ul>
            <li>列表项1</li>
            <li>列表项2</li>
            <li>列表项3</li>
          </ul>
        `
        this.editorContent = this.$refs.editor.innerHTML
      },

      insertMarkdownSample() {
        this.markdownContent = `# 标题1
## 标题2
### 标题3

这是**粗体**文字，这是*斜体*文字。

- 列表项1
- 列表项2
- 列表项3

> 这是一个引用块

\`\`\`javascript
console.log('Hello, world!')
\`\`\`

[链接文字](https://github.com)
`
      },

      clearMarkdown() {
        this.markdownContent = ''
      },
    },

    mounted() {
      this.$refs.editor.focus()
    },
  }
</script>

<style lang="scss" scoped>
  .editor-container {
    padding: 15px;
    background: $base-color-white;

    .editor-content {
      min-height: 400px;

      .editor-demo,
      .markdown-demo {
        margin-bottom: 30px;

        h3 {
          margin: 20px 0;
          color: #333;
        }

        .editor-toolbar {
          padding: 10px;
          background: #f5f5f5;
          border-radius: 4px;
          margin-bottom: 10px;

          .el-button {
            &.active {
              background: #409eff;
              color: white;
            }
          }
        }

        .editor-wrapper {
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          min-height: 200px;
          margin-bottom: 10px;

          .editor {
            min-height: 200px;
            padding: 15px;
            outline: none;

            &:focus {
              border-color: #409eff;
            }
          }
        }

        .editor-actions {
          margin-bottom: 20px;
        }

        .editor-preview {
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          padding: 15px;
          background: #fafafa;

          .preview-content {
            min-height: 100px;
          }
        }

        .markdown-editor,
        .markdown-preview {
          margin-bottom: 15px;
        }

        .markdown-preview {
          border: 1px solid #dcdfe6;
          border-radius: 4px;
          padding: 15px;
          min-height: 220px;
          background: #fafafa;
        }

        .preview-content {
          ::v-deep {
            h1,
            h2,
            h3 {
              margin: 10px 0;
            }

            ul,
            ol {
              padding-left: 20px;
            }

            blockquote {
              margin: 10px 0;
              padding: 10px 15px;
              background: #f5f5f5;
              border-left: 4px solid #409eff;
            }

            code {
              padding: 2px 4px;
              background: #f5f5f5;
              border-radius: 3px;
            }

            pre {
              padding: 10px;
              background: #f5f5f5;
              border-radius: 4px;
              overflow: auto;
            }
          }
        }
      }
    }
  }
</style>
